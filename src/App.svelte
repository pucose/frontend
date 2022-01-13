<script>
  import Header from "./Header.svelte";
  import Prompt from "./Prompt.svelte";
  import Comments from "./Comments.svelte";
  import Auth from "./Auth.svelte";
  //export let config;
</script>

<div class="pucose">
  <Header />
  <Auth />
  <Prompt />
  <Comments />
</div>
<style>
.pucose {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background: transparent;
}
</style>
