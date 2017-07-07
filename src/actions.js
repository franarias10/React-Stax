
//*******ToolBox actions **************
function openSideBar(){
  return {
    type: 'open_sidebar'
  };
}

function autoCloseSideBar(){
  return {
    type: 'close_sideBar'
  };
}
//**********************************
//******header actions**************
function openInbox(){
  return{
    type: 'open_inbox'
  }
}

function closeInbox(){
  return{
    type: 'close_inbox'
  }
}
//**********************************

export default {
  openSideBar,
  autoCloseSideBar,
  openInbox,
  closeInbox};
