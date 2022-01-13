<script>
  import ProfileSvg from "./assets/Profile-Image.svg";
</script>

  <div class="prompt">
    <div class="profil">
      <ProfileSvg />
    </div>
    <div class="textarea">
      <div contenteditable="true" aria-label="Herkese açık bir yorum ekle..."/>
    </div>
  </div>
  <div class="buttons">
    <div>
      <button>Send</button>
      <button>Cancel</button>
    </div>
  </div>

<style>
  .prompt {
    margin-top: 24px;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .prompt .profil {
    background-color: #f5f5f5;
  }
  .prompt .textarea {
    width: 100%;
    height: 100%;
    padding: 7px;
  }
  [contenteditable="true"] {
    border: none;
    border-bottom: 1px solid rgb(0, 0, 0);
  }
  [contenteditable="true"]:focus {
    outline: none;
  }
  [contenteditable="true"][aria-label]:empty:before {
    content: attr(aria-label);
    color: rgb(0, 0, 0);
  }
  .buttons {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
  }
  .buttons button {
    all: unset;
    text-align: center;
    background-color: #2A2E2E;
    border-bottom: #f5f5f5;
    border-radius: 0;
    color: #f5f5f5;
    cursor: pointer;
    font-size: 14px;
    width: 56px;
    height: 24px;
  }
  .buttons button:hover {
    background-color: #f5f5f5;
    color: #2A2E2E;
  }
  .buttons button:focus {
    outline: none;
  }
</style>
