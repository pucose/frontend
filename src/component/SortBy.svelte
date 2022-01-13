<script>
  import CaretDownSvg from "../assets/Caret-down.svg";
  import RowsSvg from "../assets/Rows.svg";
  export let name;

  let show = false;
  function drop() {
    show = !show;
  }

</script>

<div class="dropdown">
  <button on:click={drop} class="dropbtn"><RowsSvg />{name} <CaretDownSvg /></button>
  <div class="dropdown-content {show === true ? 'show' : ''}">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</div>

<style>
  .dropbtn {
    border: none;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    justify-items: center;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .show {
    display: block;
  }
</style>
