import { useState } from "react";

const [addGame, {error, loading, {data}}] = useMutation(ADD_Game)