import style from "@/app/assets/styles/main.module.css";
import prog from "./ohjelma.module.css";

export const metadata = {
	title: "Ohjelma - S.A.A.R.I. 2024",
	description: "Leirin ohjelma S.A.A.R.I. 2024",
};

import program from "@/app/data/program.json";

export default function Home() {
	return (
		<main className={style.main}>
			<div className={style.hero}>
				<div className={style.content}>
					<h2>Leirin Ohjelma</h2>
				</div>
			</div>
			<div className={style.programWrapper}>
				<ScheduleBuilder schedule={program} />
				<p className={prog.disclaimer}>
					Pidätämme oikeuden muutoksiin. Ohjelma julkaistaan vasta kyseisen päivän aamuna.
				</p>
			</div>
		</main>
	);
}

const ScheduleBuilder = ({ schedule }) => {
	return (
		<div className={prog.wrapper}>
			{/* If the day.date is today or earlier then display other wise hide */}
			{schedule.days.map((day, index) =>
				day.date == new Date().toISOString().split("T")[0] ? (
					<DayBlock
						day={day}
						key={index}
					/>
				) : (
					<div
						className={prog.dayWrapper}
						key={index}>
						<div
							className={prog.dayTitle}
							key={index}>
							<div className={prog.titleWrapper}>
								<h3>{day.title}</h3>
								<span>
									{new Date(day.date).toLocaleDateString("fi-FI", {
										month: "numeric",
										day: "numeric",
									})}
								</span>
							</div>
						</div>
						<p className={prog.emptyDay}>Ohjelmaa ei ole vielä julkaistu</p>
					</div>
				)
			)}
		</div>
	);
};

const DayBlock = ({ day }) => {
	return (
		<div className={prog.dayWrapper}>
			<div className={prog.dayTitle}>
				<div className={prog.titleWrapper}>
					<h3>{day.title}</h3>
					<p>
						{new Date(day.date).toLocaleDateString("fi-FI", {
							month: "numeric",
							day: "numeric",
						})}
					</p>
				</div>
			</div>
			<ul className={prog.eventsWrapper}>
				{day.events.map((event, index) => (
					<li
						className={prog.event}
						key={index}>
						<div className={prog.eventTimeWrapper}>
							<span>{event.time}</span>
						</div>
						<div className={prog.eventDetails}>
							{event.events ? (
								<ul className={prog.eventItems}>
									{event.events.map((subEvent, index) => (
										<EventBlock
											event={subEvent}
											key={index}
										/>
									))}
								</ul>
							) : (
								<EventBlock event={event} />
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

const EventBlock = ({ event }) => {
	return (
		<>
			<div
				className={
					prog.eventItem +
					(event.highlight ? ` ${prog.highlight}` : "") +
					(event.group === 1
						? ` ${prog.group1}`
						: event.group === 2
						? ` ${prog.group2}`
						: event.group === 3
						? ` ${prog.group3}`
						: "")
				}>
				{event.title && <p>{event.title}</p>}
				{event.secret && <span className={prog.secret}>Salaista</span>}
				{event.group && (
					<span className={prog.groupIndicator}>
						{/* Getting group name from the data */}
						{event.group === 1
							? "Sudenpennut"
							: event.group === 2
							? "Seikkailijat & Tarpojat"
							: event.group === 3
							? "Samoajat"
							: ""}
					</span>
				)}
			</div>
		</>
	);
};
