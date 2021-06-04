import Image from "next/image";
import React from "react";

interface Employee {
	avatar: string;
	name: string;
	title: string;
}

const employees: Employee[] = [
	{
		avatar: "/avatars/1.png",
		name: "Johan Gunnarsen",
		title: "Daglig Leder",
	},
	{
		avatar: "/avatars/2.png",
		name: "Silje Torgersen",
		title: "Journalist",
	},
	{
		avatar: "/avatars/3.png",
		name: "Rolf Andersen",
		title: "Journalist & Vaskepersonell",
	},
];

const Employees = () => {
	return (
		<React.Fragment>
			<div className="emps m-auto md:w-2/4 w-3/4">
				{employees.map((emp) => (
					<div className="bg-gray-100 rounded-lg p-2 flex">
						<Image
							alt={emp.name}
							src={emp.avatar}
							height={64}
							width={64}
							layout="fixed"
						/>
						<div className="ml-2 my-auto flex flex-col">
							<p className="font-bold">{emp.name}</p>
							<p>{emp.title}</p>
						</div>
					</div>
				))}
			</div>
			<style jsx>{`
				.emps {
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-gap: 32px;
					grid-auto-flow: dense;
				}
				@media (max-width: 459px) {
					.emps {
						display: flex;
						flex-direction: column;
					}
				}
			`}</style>
		</React.Fragment>
	);
};

export default Employees;
