const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const validateEmail = function(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const validatePassword = function(newPassword) {
  const newPassword = document.getElementById('changePasswordForm').newPassword.value;
  const minNumberofChars = 5;
  const maxNumberofChars = 20;
  const regularExpression  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  alert(newPassword); 
  if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
      return false;
  }
  if(!regularExpression.test(newPassword)) {
      alert("password should contain atleast one number and one special character");
      return false;
  } 
};

const playerSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 4,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Must match an email address!'],
    validate: validateEmail
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    unique: true,
    match: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
    validate: validatePassword
  },
  friends: [{
    type: Schema.Types.ObjectId, 
    ref: 'User',
}]
},
{
  toJSON: {
  virtuals: true,
},
id: false,
}
);

playerSchema
    .virtual("friendCount")
    .get(function () {
        return this.friends.length;
    });

playerSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

playerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Player = model('Player', playerSchema);

module.exports = Player;
