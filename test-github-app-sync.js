// Test file to verify the F8 Knowledge Assistant Sync GitHub App pulls
// this content into the knowledge base automatically on push, with no
// manual "Sync now" click required.
//
// Secret marker for verification: PINEAPPLE-ROCKET-4471

function verifyGithubAppAutoSync() {
    return "If the assistant can quote PINEAPPLE-ROCKET-4471, the webhook worked.";
}

module.exports = { verifyGithubAppAutoSync };
