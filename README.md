# Mebu's Portfolio Website

The website should be up [here](https://mebu98.no/)

<!-- Toc start -->
## Table of Contents
- [The Stack](#the-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Cloud & image hosting](#cloud--image-hosting)
  - [Database](#database)

- [Problems I encountered / am encountering](#problems-i-encountered--am-encountering)

- [Plans for the future & ideas](#plans-for-the-future--ideas)

<!-- Toc end -->

## The Stack
The stack is probably way too complicated for my own good,
but I wanted to do something that is (more or less) in my full control.

I realise using a service such as [Squarespace](https://www.squarespace.com/) or 
[WordPress](https://wordpress.com/) would allow me to do the same job 1000% faster, 
but I've had a lot of fun and learned a lot throughout this project.

### Frontend
The current frontend is mostly created using Vue3, vite, and served using NGINX.

I've tried creating most modules myself, such as my PhotoModal / "Photo Popup", 
even though there are plenty of tools out there that do the same thing.

The goal with the project, and something that has been quite time consuming,
is to have the site look and feel nice at any resolution, as well as on mobile. 
I also intend to have a good light and dark mode that support the new 
[EAA act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en).

### Backend
The backend is currently a very simple express that fetches all the photography data from the database. 

### Cloud & image hosting
For cloud provider I ended up using Google Cloud Platform because that's the only one of the three major ones I haven't tried yet.
I initially struggled a bit with connecting and uploading my Docker Images to the Google repo from WebStorm,
but after installing another piece of software (GCloud SDK Shell) it became much easier.

Google Build has been easy to connect to my GitHub repo to allow CI, but ideally I'll create a custom GitHub actions script,
but we'll see how it goes.

I initially hosted my images on [Imgur](https://imgur.com/), but after reading the rules and hearing some 
["horror stories"](https://www.reddit.com/r/webhosting/comments/12y9z76/imgur_new_community_rules_will_destroy_my_blog/)
I decided to move to [ImageKit](https://imagekit.io/) for my CDN.

I might move my "photo database" things over to ImageKit as well, 
to have everything in one place, but we'll see how it goes.

### Database
The DB for things like imageName (ImageKit endpoint + imageName = imageUrl), title, description, 
and alt-text is currently on MongoDB.

## Problems I encountered / am encountering

- Motivation...
- Changing ENV variables during runtime.
- The usual CSS and having things play nice with each other.
- 

## Plans for the future & ideas

- Tags for photos, sorting, and fuzzy searching.
  - Have photos be loaded in chunks of 5x3 instead of all at once.
- "Blog" section for sharing other projects.
- About me page (duh).
- Admin panel to more easily upload photos etc.
- Have photo information be below image if height > width.
- Transfer backend to Java, maybe.
- Use ImageKit for photo info DB instead of MongoDB.
- Comment section for photos?
