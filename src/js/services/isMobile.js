// for detect mobile devices
const isMobile = function() {
  try {
    document.createEvent("TouchEvent")
    return true
  }
  catch(e){
    return false
  }
}

export default isMobile