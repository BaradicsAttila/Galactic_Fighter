function menusettings() {
    const menuSettingsBTN = document.querySelector(".menuSettings") as HTMLDivElement;
    const menuSettingsDiv = document.querySelector(".menuSettingsList") as HTMLDivElement;
    
        if (menuSettingsDiv.style.display === "block") {
            menuSettingsDiv.style.display = "none";
        } else {
            menuSettingsDiv.style.display = "block";
        }
}

export default menusettings;
