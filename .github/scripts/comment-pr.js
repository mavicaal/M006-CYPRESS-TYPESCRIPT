/**
 * GitHub Actions Script: Comment PR with Test Results
 *
 * This script posts a comment on a pull request with the test results status.
 * Uses native Node.js fetch API (no external dependencies required).
 *
 * Environment Variables:
 * - GITHUB_TOKEN: GitHub API token (automatically provided by GitHub Actions)
 * - GITHUB_REPOSITORY: Repository in format owner/repo
 * - PR_NUMBER: Pull request number
 * - JOB_STATUS: Job status (success/failure)
 * - NODE_VERSION: Node.js version
 */

async function commentPR() {
  try {
    // Get environment variables
    const token = process.env.GITHUB_TOKEN;
    const repository = process.env.GITHUB_REPOSITORY;
    const prNumber = parseInt(process.env.PR_NUMBER);
    const jobStatus = process.env.JOB_STATUS;
    const nodeVersion = process.env.NODE_VERSION;

    // Validate required variables
    if (!token || !repository || !prNumber) {
      console.log(
        "⚠️  Skipping PR comment: Missing required environment variables"
      );
      process.exit(0);
    }

    // Parse owner and repo from GITHUB_REPOSITORY
    const [owner, repo] = repository.split("/");

    // Build comment message
    const emoji = jobStatus === "success" ? "✅" : "❌";
    const message = `${emoji} Cypress tests **${jobStatus}** on Node.js ${nodeVersion}

## Test Summary
- **Status**: ${jobStatus.toUpperCase()}
- **Node.js Version**: ${nodeVersion}
- **Runner**: GitHub Actions (ubuntu-latest)

${
  jobStatus === "failure"
    ? "📎 Check the artifacts for screenshots and videos."
    : "All tests passed! 🎉"
}`;

    // Prepare API request
    const url = `https://api.github.com/repos/${owner}/${repo}/issues/${prNumber}/comments`;
    const body = JSON.stringify({ body: message });

    console.log(`📝 Posting comment on PR #${prNumber}...`);

    // Make API request
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: body,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API Error (${response.status}): ${error}`);
    }

    const data = await response.json();
    console.log("✅ Comment posted successfully!");
    console.log(`Comment ID: ${data.id}`);
  } catch (error) {
    console.error("❌ Error posting comment:", error.message);

    // Don't fail the workflow if commenting fails
    if (error.message.includes("403")) {
      console.log("⚠️  Permission denied - check GitHub token permissions");
    }

    process.exit(0);
  }
}

// Run the script
commentPR();
