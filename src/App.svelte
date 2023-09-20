<script lang="ts">
  import { userPost } from "./lib/+state/userPostStore";
  import type { PostEntity } from "./lib/Entity/Post";
  import Post from "./lib/Post.svelte";
  let posts: PostEntity[] = [];
  userPost.subscribe(postsFromStore => posts = postsFromStore);
</script>

<main>
  <div class="card">
    {#each posts as post}
      <Post {post} />
    {/each}
  </div>
</main>

<style>
</style>
