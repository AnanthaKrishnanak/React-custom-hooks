import { useRef } from "react";

import { BaseSelectRef } from "rc-select";

export function useSelectScrollToTopOnClose() {
	const ref = useRef<BaseSelectRef>(null);

	const scrollToTopOnDropdownClose = (isVisible: boolean) => {
		if (!isVisible && ref.current) {
			ref.current.scrollTo(0);
		}
	};

	return { ref, scrollToTopOnDropdownClose };
}

/*#####  EXAMPLE ##### */

/* 
import { Select, type SelectProps } from "antd";
import { useSelectScrollToTopOnClose } from "../useSelectScrollToTopOnClose";

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
	options.push({
		value: i.toString(36) + i,
		label: i.toString(36) + i,
	});
}
const SelectExample = () => {
	const { ref, scrollToTopOnDropdownClose } = useSelectScrollToTopOnClose();

	return (
		<Select
			mode="tags"
			ref={ref}
			style={{ width: "100%" }}
			onDropdownVisibleChange={scrollToTopOnDropdownClose}
			tokenSeparators={[","]}
			options={options}
			// Add any other necessary props here
		/>
	);
};

export default SelectExample;
 */