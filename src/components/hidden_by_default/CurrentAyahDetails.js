import React from "react";
//
import { getStoredValue } from "../helpers/helpers";
function CurrentAyahDetails({ currentAyahDetailsVisibility, UILanguage }) {
	const [currentSurahNameAR, setCurrentSurahNameAR] = React.useState("الفاتحة");
	const [currentSurahNameEN, setCurrentSurahNameEN] = React.useState("Al Fatihha");
	const [currentAyahNumber, setCurrentAyahNumber] = React.useState(0);
	const [currentSurahNumber, setcurrentSurahNumber] = React.useState(0);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	React.useEffect(() => {
		getStoredValue("currentSurahNameAR", setCurrentSurahNameAR);
		getStoredValue("currentSurahNameEN", setCurrentSurahNameEN);
		getStoredValue("currentAyahNumber", setCurrentAyahNumber);
		getStoredValue("currentSurahNumber", setcurrentSurahNumber);
	});
	// console.log(curentAyahNumber, curentAyahNumberInSurah);
	return (
		<div className="current-ayah-details-hidden">
			<div
				className="wrapper"
				style={{
					height: currentAyahDetailsVisibility === true ? "auto" : "0",
					outline: currentAyahDetailsVisibility ? "1px solid lightcyan" : "none",
					boxShadow: currentAyahDetailsVisibility ? "2px 2px 4px lightcyan, -2px -2px 4px lightcyan" : "none",
				}}
			>
				<div className="row" style={{ flexDirection: UILanguage === "ar" ? "row-reverse" : "row" }}>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							<span className="header-span">إسم السورة باللغة العربية: </span>
							{currentSurahNameAR}
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							<span className="header-span">The Surah name in Arabic:</span>
							<span>{currentSurahNameEN}</span>
						</span>
					</span>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							<span className="header-span">إسم السورة باللغة الإنجليزية:</span>
							{currentSurahNameAR}
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							<span className="header-span">The Surah name in English: </span>
							{currentSurahNameEN}
						</span>
					</span>
				</div>
				<div className="row" style={{ flexDirection: UILanguage === "ar" ? "row-reverse" : "row" }}>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							<span className="header-span"> رقم الأية:</span>
							{currentAyahNumber}
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							<span className="header-span"> Ayah number:</span>
							{currentAyahNumber}
						</span>
					</span>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							<span className="header-span"> رقم السورة:</span>
							{currentSurahNumber}
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							<span className="header-span"> The Surah number:</span>
							{currentSurahNumber}25
						</span>
					</span>
				</div>
				<div className="row" style={{ flexDirection: UILanguage === "ar" ? "row-reverse" : "row" }}>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							<a href>أقرأ الأية كاملة (رابط خارجي)</a>
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							<a href>Read the entire Ayah (external link)</a>
						</span>
					</span>
				</div>
			</div>
		</div>
	);
}

export default CurrentAyahDetails;