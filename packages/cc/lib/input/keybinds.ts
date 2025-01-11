type Command = string | { command: string, shortcut: string };

export class KeybindManager {
    private commands: { [key: string]: Function } = {};
    private shortcuts: { [key: string]: string } = {};
    private toolbar: HTMLDivElement;
    private commandDisplay: HTMLDivElement;
    private disappearTimeout: NodeJS.Timeout | null = null;

    constructor(commands: Command[]) {
        // Create toolbar
        this.toolbar = document.createElement('div');
        this.toolbar.style.position = 'fixed';
        this.toolbar.style.bottom = '0';
        this.toolbar.style.width = '100%';
        this.toolbar.style.backgroundColor = 'black';
        this.toolbar.style.color = 'white';
        this.toolbar.style.zIndex = '9999';
        this.toolbar.style.padding = '10px'; // Add padding
        this.toolbar.style.fontFamily = 'Verdana, sans-serif'; // Change font
        document.body.appendChild(this.toolbar);

        // Create command display bar
        this.commandDisplay = document.createElement('div');
        this.commandDisplay.style.position = 'fixed';
        this.commandDisplay.style.bottom = '0'; // Same position as the toolbar
        this.commandDisplay.style.width = '100%';
        this.commandDisplay.style.backgroundColor = 'black';
        this.commandDisplay.style.color = 'white';
        this.commandDisplay.style.zIndex = '10000'; // Make it appear over the toolbar
        this.commandDisplay.style.display = 'none'; // Initially hide the command display bar
        this.commandDisplay.style.padding = '10px'; // Add padding
        this.commandDisplay.style.fontFamily = 'Verdana, sans-serif'; // Change font
        document.body.appendChild(this.commandDisplay);

        // Parse commands
        for (const command of commands) {
            if (typeof command === 'string') {
                const shortcut = command.charAt(0);
                this.shortcuts[shortcut] = command;
                this.commands[command] = () => {};
                this.toolbar.innerHTML += `(${shortcut})${command} `;
            } else {
                const shortcut = command.shortcut.replace('C-', '');
                this.shortcuts[`C-${shortcut}`] = command.command;
                this.commands[command.command] = () => {};
                this.toolbar.innerHTML += `(${command.shortcut})${command.command} `;
            }
        }

        // Listen to keyboard events
        document.addEventListener('keydown', (event) => {
            let key = event.key;
            if (event.ctrlKey) {
                key = `C-${key}`;
            }
            const commandName = this.shortcuts[key];
            if (commandName) {
                const command = this.commands[commandName];
                this.commandDisplay.innerHTML = `Executing command: ${commandName}`;
                this.commandDisplay.style.display = 'block'; // Show the command display bar
                command();

                // Clear the disappearTimeout if it exists
                if (this.disappearTimeout) {
                    clearTimeout(this.disappearTimeout);
                }

                // Set a new disappearTimeout to hide the command display bar after 0.5 seconds of inactivity
                this.disappearTimeout = setTimeout(() => {
                    this.commandDisplay.style.display = 'none';
                    }, 500);
            }
        });
    }

    on(commandName: string, action: Function) {
        if (this.commands[commandName]) {
            this.commands[commandName] = action;
        } else {
            console.error(`Command "${commandName}" does not exist.`);
        }
    }
}
