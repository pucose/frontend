<script>
    import { comment } from './store.js'
    import { onDestroy } from 'svelte'
    import CommentJs from './comment.js'
    import { get } from 'svelte/store'
    let commentJs = CommentJs;
    comment.subscribe(value => {
        commentJs = value
    })
    onDestroy(() => {
        comment.set(commentJs)
    })
    console.log(get(comment))
  </script>
 