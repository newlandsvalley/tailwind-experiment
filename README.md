## TradtuneDB Tailwind Experiment

This is an experiment to see if we can add responsive design to tradtunedb by totally rewriting the css in tailwind. The pages are mocked-up in HTML.  At the moment I am considering only small devices (i.e. mobiles) and not tablets. 

The metronome page uses HTML5 Canvas with dynamic effects and thus can't be scaled with simple css.  I intend to amend the metronome and add a scale parameter to each object and then (I hope) allow the page to detect the screen size and set the scale factor.

### Pages

- [x] Search form
- [x] Advanced Search form
- [x] Genre form
- [x] Login form 
- [x] Register form
- [x] Upload form
- [x] Edit Comment form

- [ ] Tune List 
- [x] Tune 
- [ ] Comments
- [ ] User List 
- [ ] Metronome

- [ ] Help
- [ ] About 
- [ ] Credits 
- [ ] Contact Us

- [ ] ABC Edit 
- [ ] ABC Tutorial
- [ ] Confirmation

### Findings

Well, so far I've used Tailwind mostly to see if I can reproduce the styling I already have in plain css.  It certainly works, and I've learnt to use newer constructions like *flex* which are simpler and more intuitive.

The main changes are to do with being responsive and so far this only affects the headers and footers on each page and the metronome page which currently don't fit on mobiles.  However the expense of rewriting the css on every element in the application will be huge, particularly if no real change is visible to the user.

So, instead, I'm concentrating now on expressing the responsiveness in plain css, picking up tricks I've learnt along the way, such as defining *.hidden* and *.flex*.