function skillsMember() {
    const member = document.querySelector('.member');
    const memberPosition = member.getBoundingClientRect().top;
    const memberScreenPosition = window.innerHeight / 1.5;

    if (memberPosition < memberScreenPosition) {
        member.classList.add('skills__member-active');
    }
}