# Employee Management System - Simple Deployment Guide

## What is this?
This is an Employee Management System that helps track employee tasks and manage their work. It's a web application that needs to be put on the internet so people can use it.

## What you'll need before starting
1. An AWS Account (like having space on the internet to put your website)
2. Git on your computer (a tool to download the code)
3. A way to connect to your server (we'll explain how)
4. Node.js on your computer (the main tool we need to run the website)

## Step-by-Step Guide

### Step 1: Setting up your space on the internet (AWS)
1. Go to aws.amazon.com and log in to your account
2. Click on "Services" and find "EC2" (this is like renting a computer on the internet)
3. Click the orange "Launch Instance" button
4. Give your server a name (like "my-employee-system")
5. Pick "Ubuntu" from the list (it's a type of computer system)
6. Keep the "t2.micro" option selected (it's free!)
7. Under "Security" (like door locks for your server):
   - Make sure port 22 is open (so you can connect)
   - Open port 80 (so others can see your website)
   - Open port 443 (for security)
8. Create a new key (like a special password file) - SAVE THIS FILE SAFELY!
9. Click "Launch Instance" - Your server is now starting up!

### Step 2: Connecting to your server
1. Find your key file (it ends with .pem) that you downloaded
2. Open your terminal (Command Prompt on Windows, Terminal on Mac)
3. Go to the folder where your key file is:
   ```bash
   # If your key is on the Desktop (Windows):
   cd C:\Users\YourName\Desktop

   # If your key is on the Desktop (Mac/Linux):
   cd ~/Desktop
   ```
4. Make your key file secure:
   ```bash
   chmod 400 your-key-file.pem   # On Mac/Linux
   # Windows users can skip this step
   ```
5. Connect to your server (AWS will show you the exact command)
   ```bash
   ssh -i "your-key-file.pem" ubuntu@your-server-address
   ```
   When it asks "Are you sure you want to continue?" type 'yes'

### Step 3: Getting your server ready
Now we need to install some programs on your server. Just copy and paste these commands one by one:

1. First, update your server (like updating your phone):
   ```bash
   sudo apt update
   sudo apt upgrade -y
   ```

2. Install Node.js (the main program we need):
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   ```

3. Install Nginx (this helps show your website to the world):
   ```bash
   sudo apt install nginx -y
   ```

4. Check if everything installed correctly:
   ```bash
   node --version    # Should show a number like v18.x.x
   npm --version     # Should show another number
   nginx -v         # Should show nginx version
   ```
If any of these commands show an error, try running the installation step again.

### Step 4: Setting up your website
Now let's get your website ready! Copy these commands one at a time:

1. Download the website code:
   ```bash
   git clone https://github.com/sdas17/Python_Zero_to_Hero_for_DevOps_Engineers.git
   cd Python_Zero_to_Hero_for_DevOps_Engineers
   ```

2. Install the website's needs (this might take a minute):
   ```bash
   npm install
   ```

3. Build your website:
   ```bash
   npm run build
   ```

4. Put your website where people can see it:
   ```bash
   sudo mv dist/* /var/www/html/
   ```

If you see any errors, try running the same command again. Sometimes it works the second time!

### Step 5: Starting your website
1. Turn on your website:
   ```bash
   sudo systemctl restart nginx
   ```

2. Make sure it's running:
   ```bash
   sudo systemctl status nginx
   ```
   You should see some green text saying "active (running)"

### Using Your Website
1. Go back to AWS website
2. Click on your server (EC2 instance)
3. Find the "Public IPv4 address" (it looks like 12.34.56.78)
4. Copy this address
5. Open a new tab in your web browser
6. Paste the address and press Enter
7. You should see your website!

### Common Problems and Solutions

If your website isn't working:

1. Did you get an error in any step? Try that step again
2. Make sure you copied all commands exactly
3. Try restarting your server:
   ```bash
   sudo systemctl restart nginx
   ```

### Want to Update Your Website Later?
When you want to update your website, just run these commands:
```bash
cd Python_Zero_to_Hero_for_DevOps_Engineers
git pull                           # Get latest code
npm install                        # Update requirements
npm run build                      # Rebuild website
sudo mv dist/* /var/www/html/      # Update live website
```

### Need Help?
If you're stuck, try these steps:
1. Make sure all commands were copied exactly
2. Try logging out and logging back into your server
3. If nothing works, you can always start fresh by creating a new server

Remember: If you're not sure about something, it's okay to ask for help!