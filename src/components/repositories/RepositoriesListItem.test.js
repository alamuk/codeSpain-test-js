import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import RepositoriesListItem from "./RepositoriesListItem";

function renderRepoComponent() {
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

    return { repository };
}

test("shows the link in the github home page", async () => {
    const { repository } = renderRepoComponent();

    await screen.findByRole("img", { name: "Javascript" });

    const link = screen.getByRole("link", { name: /github repository/i });
    expect(link).toHaveAttribute("href", repository.html_url);
});

// import { act } from "@testing-library/react";

// if We don't want to render a element/component in from my components
//
// jest.mock("../tree/FileIcon", () => {
//     return () => {
//         return "File Icon Component";
//     };
// });
//
// inside test function:
// screen.debug();
// await pause();
// screen.debug();

// DON'T USE THIS FUNCTION FOR ANY CASE
// await act(async () => {
//     await pause();
// })

// outside the test function:
// const pause = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, 100);
//     });
// };
