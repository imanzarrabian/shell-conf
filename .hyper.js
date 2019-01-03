module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace, "Fira Code"',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(248,28,229,0.8)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    updateChannel: 'canary',

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    backgroundColor: 'rgba(0,0,0,1)',

    // border color (window, tabs)
    borderColor: '#cc00ff',
    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px 20px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#ffff00',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#00ffff',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00ffff',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    // make sure to use a full path if the binary name doesn't work
    // (e.g `C:\\Windows\\System32\\bash.exe` instad of just `bash.exe`)
    // if you're using powershell, make sure to remove the `--login` below
    shell: '/bin/zsh',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    //  bell: 'SOUND',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg

    //plugin configurations
    hyperline: {
      plugins: [
        "ip",
        "cpu",
        "network",
        "battery",
        "hostname"
      ]
    },

    hyperTabs: {
      trafficButtons: true,
      border: true,
      tabIconsColored: true,
      closeAlign: 'right',
      activityColor: 'salmon'
    },

    commands: [],

    StarWarsTheme: {
      character: ['darth-vader', 'r2d2','han-solo', 'luke-skywalker-older','bb8'], // Define your favorite star wars character
      lightsaber: 'true', // Activate your theme's lightsaber mode
      unibody: 'false', // Define the color of the Hyper window header
      avatar: 'true'  // Activate your theme's background avatar
    },

    hyperStatusLine: {
      dirtyColor: 'salmon',
      aheadColor: 'ivory',
      footerTransparent: true
    }
    /*overlay: {
      alwaysOnTop: true,
      animate: true,
      hasShadow: false,
      hideDock: false,
      hideOnBlur: false,
      hotkeys: ['Option+Space'],
      position: 'bottom',
      primaryDisplay: false, 
      resizable: true,
      startAlone: false,
      startup: false,
      size: 0.4,
      tray: true,
      unique: false
    }*/
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    "hyperlinks",
    "hyper-tabs-enhanced",
    "hyper-search",
    "hypercwd",
    //"hyperterm-overlay"
    //"hyper-one-dark"
    //"hyper-star-wars",
    //"hyper-snazzy"
    "hyper-startup",
    //"hyper-dracula",
    "hyper-night-owl",
    "hyperline",
    //"hyper-statusline",
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  // Set the rgba() app background opacity, useful when enableVibrance is true
  // OPTIONS: From 0.1 to 1
  backgroundOpacity: '1',

  // Set the accent color for the current active tab
  accentColor: '#64FFDA',

  // Mac Only. Need restart. Enable the dark vibrance and blurred background
  // NOTE: The backgroundOpacity should be between 0.1 and 0.9 to see the effect.
  enableVibrance: false,

};
