import React, { useState } from "react";

import "./style.scss";


export default function LangButton() {
	const [langEng, setLangEng] = useState(false);

	const onHandleClick = (e) => {
		setLangEng(!langEng);
	};

	return (
		<button className="lang-button" onClick={onHandleClick}>
			{langEng ? "Рус" : "Eng"}
		</button>
	);
}
