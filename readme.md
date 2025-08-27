

What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById select a specific id from html.  getElementsByClassName like an array which select class from html   and querySelector select first matching CSS element. Which can be a class,tag or else...    querySelectorAll selects all relevaet CSS matching element from code

How do you create and insert a new element into the DOM?
Answer: 
create : suppose we have a class "programming-hero". we can add another new element its before of after
const newElement = document.createElement("div");
newElement.textContent = "this is another div content";
programming-hero.before(newElement);  
programming-hero.after(newElement);

What is Event Bubbling and how does it work?
Answer: Event Bubbling works from leaves(child) of an html structgure. First event hits child notes, then child parents and then parent. 
Working method: child -> parent -> .... -> body -> html


What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is a technique to add a single event listener to a parent element that manage all child element for this parent. if child are added later no metter its works for this new child also.

Event Delegation is Useful for some reason: 
No risk for Memory waste and faster performance. 
clean code. 
Works dynamically so that it works for all new and old element. 


What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault(): prevents the default browser action for an event. If we have a button and a link for programming-hero. Normall after click, button follow the link. but if we use preventDefault(e) it's stop the link navigation and cannot inside the link. 

stopPropagation(): Stops the event from bubbling to parent elements. It cannot stop default hehaviour. It's stop bubbling. It also prevent duplicate when parent and child both have listeners.


