function copyCommand(event)
{
	event.preventDefault();
	var code = event.target.parentNode.querySelector("code"),
	input = document.createElement("input");
	input.value = code.textContent;
	input = document.body.appendChild(input);
	input.select();
	if(document.execCommand("copy"))
	{
		UIkit.notification({
			message: "Successfully copied the command.",
			status: "success",
			pos: "top-center",
			timeout: 2000
		});
	}
	else
	{
		UIkit.notification({
			message: "Failed to copy the command.",
			status: "failure",
			pos: "top-center",
			timeout: 2000
		});
	}
	document.body.removeChild(input);
}
