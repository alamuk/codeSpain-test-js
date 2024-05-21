import { render, screen } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";

function renderRepositoriesComponent() {
    const repository = {
        full_name: "facebook/react",
        language: "Javascript",
        description: "A js lib",
        owner: "facebook",
        name: "react",
        html_url: "https://github.com/facebook/react",
    };

    render(<RepositoriesListItem repository={repository} />);
}

test("shows the link in the github home page", () => {});
