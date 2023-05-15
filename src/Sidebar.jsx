import avatar from './arsbadal.JPG';
import linkedInLogo from './linkedin.svg'
import gitHubLogo from './github.svg'

// Sidebar Menu List
const menu = ["About", "My Skills", "Work", "Contact"];
const socialMedia = [
	{
		tooltip: "GitHub",
		src: gitHubLogo,
		href: "https://github.com/arsenbadalyan"
	},
	{
		tooltip: "LinkedIn",
		src: linkedInLogo,
		href: "https://linkedin.com/arsenbadalyan"
	}
];

function Sidebar()
{
	return (
		<div className="w-[100%]">
			<div className="w-[100%] h-[30vh] bg-neutral-focus text-center flex flex-col justify-center align-center">
				<div>
					<div className="w-[50%] m-auto mask mask-squircle">
						<img src={avatar} />
					</div>
				</div>
				<h1 className="text-xl">
					Arsen<br/>Badalyan
				</h1>
				<h2 className="text-sm">
					Software Engineer
				</h2>
			</div>
			<div className="w-[100%] h-[70vh] bg-neutral pt-5">
				<ul className="text-center font-bold">
					{
						menu.map(item => (
							<li className="p-2 cursor-pointer border-y border-y-base-100 hover:bg-neutral-content hover:text-neutral">
								{item}
							</li>
						))
					}
				</ul>
				<div className="flex justify-center gap-5 mt-10">
					{
						socialMedia.map(item => (
							<div className="tooltip" data-tip={item.tooltip}>
								<a href={item.href} target="_blank">
									<img src={item.src} className="w-[30px]" />
								</a>
							</div>
							
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Sidebar;