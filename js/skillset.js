const primarySkillsetGrid = document.getElementById("primary-skillset");
const primaryTechnologies = ["nest", "mongo", "express", "prisma", "socketio", "nodejs", "linux", "typescript", "clang", "sveltekit", "capacitor", "playwright", "docker", "gitlab"]
const primaryClasslist = "xl:row-start-5 xl:row-end-8 border-highlight w-full aspect-square"
renderSkillset(primarySkillsetGrid, primaryTechnologies, primaryClasslist);

const secondarySkillsetGrid = document.getElementById("secondary-skillset");
const secondaryTechnologies = ["vue", "react", "kubernetes", "ansible", "postgres", "figma", "tailwind", "golang"]
const secondaryClasslist = "xl:row-start-4 xl:row-end-7 border-highlight w-full aspect-square"
renderSkillset(secondarySkillsetGrid, secondaryTechnologies, secondaryClasslist);

function renderSkillset(gridElement, technologies, defaultClass) {
	for (let i = 0; i < technologies.length; i++)
	{
		const newImg = document.createElement("img")
		newImg.src = `./assets/images/tech/${technologies[i]}.svg`
		newImg.classList.add(...defaultClass.split(' '))
		console.log(window.innerWidth);
		if (i === (technologies.length / 2) - 1)
			newImg.classList.add("xl:border-r")
		else if (i < technologies.length - 1)
			newImg.classList.add("border-r")
		gridElement.appendChild(newImg)
	}
}