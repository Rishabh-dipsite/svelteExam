<script lang="ts">
  import type { PostEntity } from "./Entity/Post";

    export let post: PostEntity;
    let text = '';
    const addComment = () => {
        post.comments = [...post.comments, {comment: text, user: 'Evaluator'}];
        // We can also update store posts from here but not doing is as this way is more efficient as we are not using store post outside this.
        text = ''
    }
  </script>
  
  <div>
    <h4>{post.title}</h4>
    <h5>{post.description}</h5>
    <p>{post.comments.length} comment(s)</p>
    {#each post.comments as comment}
    <div class="comment">
        <h7>{comment.comment}</h7>
        <p>-{comment.user}</p>
        <input type="button" value="Like"/>
        <input type="button" value="Dislike"/>
    </div>
    {/each}
    <input type="text" bind:value={text}/>
    <button on:click={addComment}>Send</button>
  </div>

  <style>
    .comment{
        border: 1px;
        border-style: solid;
        margin-bottom: 4px;
    }
    p{
        font-size: 10px;
    }
  </style>