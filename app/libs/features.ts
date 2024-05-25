export const goTo = (query: string) => {
    const element = document.querySelector(`.${query}`);

    element?.scrollIntoView({
        behavior: "smooth",
    });
};