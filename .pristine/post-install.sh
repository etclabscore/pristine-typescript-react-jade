#!/bin/bash

BLUE="\033[0;34m"
RED="\033[0;31m"
NC="\033[0m" # No Color
defaultPackageName="@etclabscore\/pristine-typescript-react-jade"
defaultHomepage="https://etclabscore.github.io/pristine-typescript-react-jade/"

echo ""
echo "💎  Welcome Pristine Typescript Jade React Post-Install setup! 💎"
echo ""
echo ""

echo -e "${BLUE}Enter the Package Name that will be used for the package.json:${NC}"

read packageName

echo ""

echo -e "${BLUE}Enter the homepage that will be used for the React app (if hosted on github pages domain)${NC}"

read homepage

echo ""

# using ~ in place of / to avoid slashes in package names conflicting with sed
sed -i  "" -e "s~${defaultPackageName}~${packageName}~g"  package.json
sed -i  "" -e "s~${defaultHomepage}~${homepage}~g"  package.json

echo -e "${BLUE} 🚀  Project Setup Completed. 🚀"

echo ""
