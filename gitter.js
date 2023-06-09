import { execSync } from 'child_process';

const commitMessage = process.argv[2];

try {
    execSync(`git add .`);
    execSync(`git commit -m "${commitMessage}"`);
    execSync(`git push origin master`);
    console.log('Pushed to master');
} catch (error) {
    console.log('An error occurred while committing the changes:', error);
}