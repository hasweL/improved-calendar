// #region imports
import St from 'gi://St';
// #endregion imports

import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js';
import * as PopupMenu from 'resource:///org/gnome/shell/ui/popupMenu.js';

export default class ExampleExtension extends Extension {
    enable() {
        // Create a panel button
        this._indicator = new PanelMenu.Button(0.0, this.metadata.name, false);

        //#region Creating Assets for Panel Button...
        const icon = new St.Icon({
            icon_name: 'face-laugh-symbolic',
            style_class: 'system-status-icon',
        });


        const label1 = new St.Label({
            text: "Label 1"
        });
  
        const label2 = new St.Label({
            text: "label 2"
        });

        const menulabel1 = new St.Label({
            text: "menu label 1"
        });

        console.log("labels created successfully!");
        //#endregion

        //#region Creating Box Layout for the PanelMenu Button
        const panelMenuButtonBoxLayout = new St.BoxLayout({ vertical: false });
        panelMenuButtonBoxLayout.add_child(icon);
        panelMenuButtonBoxLayout.add_child(label1);
        panelMenuButtonBoxLayout.add_child(label2);
        //#endregion

        //#region Creating Box Layout for the PanelMenu Menu
        const panelMenuBoxLayout = new St.BoxLayout({ vertical: false });
        const gridlabel1 = new St.Label({ text: 'Grid Label 1' });
        const gridlabel2 = new St.Label({ text: 'Grid Label 2' });
        panelMenuBoxLayout.add_child(gridlabel1);
        panelMenuBoxLayout.add_child(gridlabel2);
        //#endregion

        // Add the PanelMenu button to the panel and the PanelMenu menu to the button
        this._indicator.add_child(panelMenuButtonBoxLayout);
        this._indicator.menu.box.add_child(panelMenuBoxLayout);
        console.log("Success 1!");

        // Add the indicator to the panel
        Main.panel.addToStatusArea(this.metadata.uuid, this._indicator);
        console.log("Success 2!");
    }

    disable() {
        if (this._indicator) {
            this._indicator.destroy();
            this._indicator = null;
        }
    }
}

function init() {
    return new ExampleExtension();
}
