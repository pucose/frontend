<script>
  import CommentPlusSvg from "./assets/Comment-plus.svg";
  import RowsSvg from "./assets/Rows.svg";
  import UserSvg from "./assets/User.svg";
</script>

<div class="header">
  <div class="header-block">
    <div class="header-item">
      <span>Pucose</span>
    </div>
  </div>
    <div class="header-block">
      <div class="header-item">
       <UserSvg />
      </div>
</div>
</div>

<style>
  .header {
    all: unset;
  }
  .header {
    background-color: #f1f1f1;
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #2A2E2E;
  }
  .header-block {
    display: flex;
    justify-content: space-between;
  }
  .header-item {
    justify-items: center;
    justify-content: center;
  }
  .header-item span{
    font-size: 20px;
  }
</style>
