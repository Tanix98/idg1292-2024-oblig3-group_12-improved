gsap.registerPlugin(ScrollTrigger);

const fishing_timeline = gsap.timeline({
    repeat: -1,
});
fishing_timeline
    .from('.hookFish__fish2', {
        duration: 3,
        x: '500%',
        y: '100',
        ease: 'power2',
    })
    .to('.hookFish__fish2', {
        duration: 0.6,
        y: '-10%',
        ease: 'power2',
    })
    .to(
        '.hookFish__fish2',
        {
            duration: 0.6,
            rotation: 85,
            transformOrigin: 'left 50%',
        },
        '<'
    )
    .to(
        '.hookFish__fishHookWorm',
        {
            duration: 1.6,
            y: '-100%',
            ease: 'power2',
        },
        '<'
    )
    .to(
        '.hookFish__fish2',
        {
            duration: 3,
            y: '-320%',
            ease: 'power2',
        },
        '<'
    )
    .to('.hookFish__fishHookWorm', {
        duration: 3,
        y: '0',
        ease: 'power2',
    });
