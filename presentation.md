# **_Is your website visible??_**

Your website is the face of your product. It is literally the first thing anyone will go through if they want to know about you, your company, services you offer or anything that you represent.

But have you ever wondered if it's accessible to everyone who uses the web?

Can a visually impaired person access your page with the same ease as others??

> That's where the concept of accessibility comes in.

    If anyone using the web, regardless of their disabilities can 
    navigate, 
    interact & 
    access your website without any hassle, it makes your product truly accessible to everyone.

**In this talk, I will discuss about -**

    What Accessibility is,
    Why it is important,
    Who the end users are,
    How they get benefitted from this, and finally,
    How to implement it.

## **Short Summary**

    1. Accessibility - Introduction
    2. Explanation about WCAG, WAI-ARIA, ADA Compliance.
    3. Brief talk about Semantic tags (Code Demo)
    4. Representation of an Accessible web page using React forms (Code Demo) -
        a. Comparison between Semantic & non-Semantic tags for form fields,
        b. Correct use of labels,
        c. Focus management while navigating through keyboard,
        d. Use of tabindex.
    5. Axe Testing Tool - Demo
    6. Estimated time of talk: 25-30 mins

## **Detailed Explanation**

### My presentation is divided into 4 parts:

    Part 1: Introduction - Basics of accessibility (3-4 mins)

    Part 2: Semantic HTML basics (5-6 mins)

    Part 3: Code Demo - Implementing accessibility on Forms (10-12 mins)
         A. Demo and code for a fully functional form.
         B. tabindex attribute - use and implementation.
         C. Focus trap inside modals/pop-ups.

    Part 4: Testing tools for Accessibility (3-4 mins)

### **_Part 1. Introduction_**

    a. What is accessibility?

    Designing and developing websites which can be used by anyone on the web, regardless of their disabilities.

    In other words, *NO BIAS*

>

    Why even bother about it?

    - Equal access to everyone
    - It is the Law.

>

    Who are the end users benefitted from this?

    - Everyone!

>

    Types of disabilities -
    - Physical
    - Visual
    - Speech
    - Cognitive

    Our focus in this talk will be for the Visually impaired people.

>

    Different kinds of vision problems -

    - Color blindness
    - Glaucoma
    - Cataract

>

    What is WCAG??

    Web Content Accessibility Guidelines - a document which describes multiple ways through which we can make web content more accessible.

    WCAG 2.0 conformance levels
    1. A - Lowest
    2. AA - Mid (general for websites)
    3. AAA - Highest

    - Conformance at higher levels indicates conformance at lower levels.

### **_Part 2. Semantic HTML_**

    1. Examples of semantic HTML tags
    
    2. Why we should use Header and footer in all pages?

    3. Use buttons for buttons, and not span or div.

### **_Part 3. Implementing accessibility on Forms in React_**

There are 2 forms, FormA and FormB, to demonstrate a thorough example on how accessibility works.

**Structure of Forms:** Both forms are same - 4 fields & a Submit button.

**Difference** -

    1. Form A is a fully-accessible form with all necessary attributes -
        a.	aria-label,
        b.  aria-live,
        c.  aria-labelledby
        d.	semantic tags
        e.	focus management

    Thus representing how it is perceived by a visually-impaired person.

    2. Form B is without the above mentioned features.

**Form beahviour:**

On clicking submit, a pop-up appears asking - 

"Are you sure to submit? ", followed by 2 buttons - **Yes / No**.

    	a. Yes - It submits the form and display the details.

    	b. No - It returns focus of the screen to the original form with your filled values.

**Perspective of a visually impaired person** 

    1. Demo of FormB to show what it lags when no accessibility rules implemented 
    - Navigation of form using keyboard and mouse to show difference. 

    2. We will be able to hear the respective field names like name, email, etc, thus demonstrating the importance of aria-tags.

    Note for organizers - If I can't use Narrator app due to any constraints, I can record a video of the behaviour and play it in the presentation.

    3. After this, I will demo FormA to show the correct implementation.

**How focus moves on the page**

    1. During the demo of above Concept 1, I will demo how focus moves by navigating the web page through keyboard.
    2.  Discussion on “tabindex” attribute
    	a. Values that can be assigned to it
    	b. Explanation of why tabindex = 0 is important.
    	c. Effects of using tabindex = -1 , tabindex = 1
        d. How we can disrupt the flow by adding tabindex>1 to any one field.

**Concept 2.2: Managing and trapping focus**

    1. After clicking submit, when pop-up appears, the focus moves directly to the Yes button.
    2. Demo and code included on how to trap the focus inside the pop-up.


### **_Part 4. Testing accessibility (3-4 mins)_**

    1. Axe tool: 
        - Demo of how it works, 
        - meaning of the score given by it, 
        - Improve your website from the given score.
    2. Popular screen readers and how to use them.