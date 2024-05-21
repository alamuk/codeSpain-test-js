import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
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

    render(
        <MemoryRouter>
            <RepositoriesListItem repository={repository} />
        </MemoryRouter>
    );
}

test("shows the link in the github home page", () => {
    renderRepositoriesComponent();
});
