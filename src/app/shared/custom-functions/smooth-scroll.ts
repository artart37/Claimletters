//Scrolls to the target element
export function smoothScroll(target: HTMLElement, duration: number) {
  let targetTopPosition = target.getBoundingClientRect().top;
  let windowStartPosition = window.pageYOffset;
  let startTime: null | number = null;

  function myAnimation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    let elementHeight = target.getBoundingClientRect().height;
    //By adding the height we are making sure that the page scrolls until the bottom edge of the element.
    //For example, we may delete the height param - the pade will scroll up to the upper edge.
    if (windowHeight > elementHeight) {
      //If the height of the element is higher than the height of the window, it will scroll down to the bottom edge of the element
      var distance = targetTopPosition - windowHeight + elementHeight;
    } else {
      //Else, it will scroll either up or down so that the upper edge of the element is visible amd close to the upper edge of thewindow
      var distance = windowHeight - elementHeight + targetTopPosition;
    }
    let run = easeInOutQuadfunction(
      timeElapsed,
      windowStartPosition,
      distance,
      duration
    );
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(myAnimation);
  }
  // Easing function from http://www.gizma.com/easing/. Check for other easing options.
  function easeInOutQuadfunction(t: number, b: number, c: number, d: number) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
  }
  //Will run the myAnimation function at 60fps
  requestAnimationFrame(myAnimation);
}
