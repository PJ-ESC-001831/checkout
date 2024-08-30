# ~/.bashrc: executed by bash(1) for non-login shells.

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# Load ~/.bash_aliases if it exists
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# Load Git prompt script if available
if [ -f /usr/share/git/git-prompt.sh ]; then
    . /usr/share/git/git-prompt.sh
elif [ -f /etc/bash_completion.d/git-prompt ]; then
    . /etc/bash_completion.d/git-prompt
fi

# Custom prompt settings with colour and Git info
# Colours: \[\033[<style>;<colour>m\]
# Reset: \[\033[0m\]
# \u = username, \h = hostname, \w = current working directory, \$(__git_ps1) = Git branch info
PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\[\033[01;33m\]$(__git_ps1 " (%s)")\[\033[00m\]\$ '

# Enable color support for ls and add handy aliases
if [ -x /usr/bin/dircolors ]; then
    # Load dircolors if ~/.dircolors exists; otherwise, use default settings
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    alias dir='dir --color=auto'
    alias vdir='vdir --color=auto'
    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# Some more ls aliases
alias ll='ls -alF'  # List all files in long format with file type indicators
alias la='ls -A'    # List all files except . and ..
alias l='ls -CF'    # List files in columns, with classification indicators

# Add an "alert" alias for long running commands. Use like so:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history | tail -n1 | sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# Set PATH so it includes user's private bin if it exists
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi

# Set PATH so it includes user's private bin if it exists
if [ -d "$HOME/.local/bin" ] ; then
    PATH="$HOME/.local/bin:$PATH"
fi

# Enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

# Custom environment variables
export EDITOR='nano'
export VISUAL='nano'

# Custom functions
# Function to add all private SSH keys in a directory to the SSH agent
add_all_ssh_keys() {
    local ssh_key_dir="$1"

    if [ -d "$ssh_key_dir" ]; then
        for key in "$ssh_key_dir"/*; do
            if [ -f "$key" ] && [[ "$key" != *.pub ]]; then
                ssh-add "$key" 2>/dev/null
            fi
        done
    else
        echo "Directory $ssh_key_dir does not exist."
    fi
}

# Start ssh-agent
eval "$(ssh-agent -s)" > /dev/null

# Add all SSH keys in the specified directory
add_all_ssh_keys ~/.ssh/keys

# Use keychain to manage SSH keys
if command -v keychain >/dev/null 2>&1; then
    eval $(keychain --eval --agents ssh ~/.ssh/keys/*)
fi

# Load NVM (Node Version Manager) if it's installed
if [ -s "$HOME/.nvm/nvm.sh" ]; then
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
fi

# Load RVM (Ruby Version Manager) if it's installed
if [ -s "$HOME/.rvm/scripts/rvm" ]; then
    source "$HOME/.rvm/scripts/rvm"
fi

# Load pyenv (Python Version Manager) if it's installed
if command -v pyenv >/dev/null 2>&1; then
    export PYENV_ROOT="$HOME/.pyenv"
    export PATH="$PYENV_ROOT/bin:$PATH"
    eval "$(pyenv init --path)"
    eval "$(pyenv init -)"
fi

# Load SDKMAN! (Software Development Kit Manager) if it's installed
if [ -s "$HOME/.sdkman/bin/sdkman-init.sh" ]; then
    source "$HOME/.sdkman/bin/sdkman-init.sh"
fi

# Load custom scripts if they exist
if [ -d "$HOME/.bashrc.d" ]; then
    for script in "$HOME/.bashrc.d"/*.sh; do
        [ -r "$script" ] && . "$script"
    done
fi

# Trust all directories in the workspace

# Parent directory
PARENT_DIR="/workspace"

# Iterate over each subdirectory in the parent directory
for dir in "$PARENT_DIR"/*; do
  if [ -d "$dir" ]; then
    git config --global --add safe.directory "$dir"
  fi
done

# Source custom development configuration
source /workspace/dev.rc
