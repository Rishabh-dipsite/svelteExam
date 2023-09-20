import { writable, type Writable } from 'svelte/store';
import type { PostEntity } from '../Entity/Post';
import { postData } from '../UserData/postsData';

// Though STORE is not needed for assignement, I am just using it as it is written in Criteria for evaluation..
export const userPost: Writable<PostEntity[]> = writable(postData);