<script>
  import ProfileSvg from "./assets/Profile-Image.svg";
  import ForwardSvg from "./assets/Forward.svg";
  import CaretDownSvg from "./assets/Caret-Down.svg";
  import CommentPlusSvg from "./assets/Comment-Plus.svg";
  import SortBy from "./component/SortBy.svelte";
  import HeartSvg from "./assets/Heart.svg";
  import comment from './comment.js';

  let comments = comment
</script>
<div class="header-item">
   <CommentPlusSvg /> {comment.length} Comments  <SortBy name="Sort By" />
</div>
{#each comments as comment }
<div class="comments">

  <div class="profil">
    <div>
        <img src="{comment.image}" alt="{comment.name}">
    </div>
  </div>
  <div class="content">
    <div class="content-item">
        <span>{comment.name}</span> - <span>{comment.date}</span>
    </div>
    <div class="content-item">
        {comment.comment}
    </div>
    <div class="content-item">
        <HeartSvg /> {comment.rating}  <ForwardSvg />Reply
    </div>
    <div class="content-item">
       <CaretDownSvg /> <a href={'#'}>12 yanıtı görüntüle.</a>
    </div>
  </div>
  
</div>
{/each}

<style>
  .comments {
    margin-top: 24px;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .comments .profil {
    background-color: #f5f5f5;
    display: inline-flex;
    justify-content: start;
  }
  .profil img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .comments .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
    .comments .content .content-item {
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 5px;
    }
    .header-item {
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 5px;
    }

</style>
