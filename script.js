let tl = gsap.timeline();

tl.from(".nav-link", {
  y: -10,
  opacity: 0,
  delay: 0.5,
  stagger: 0.5,
  duration: 0.5,
})
  .from(".hero h1", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  })
  .from(".hero p", {
    y: -100,
    opacity: 0,
    duration: 0.2,
    delay: 0.5,
  });
