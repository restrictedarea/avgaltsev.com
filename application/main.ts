import styles from "./test.less";
import test from "./test";

if (typeof window !== "undefined") {
	window.addEventListener("load", (event) => {
		const div = document.createElement("div");
		div.setAttribute("class", styles.a("d"));
		div.innerHTML = test;
		document.body.appendChild(div);
	});
}
