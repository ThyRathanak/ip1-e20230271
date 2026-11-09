
import { http } from "./http";
import type { User } from "../types";

export function getUsers() {
  return http.get<User[]>("/users");
}

export function getUserById(id: number) {
  return http.get<User>(`/users/${id}`);
}
