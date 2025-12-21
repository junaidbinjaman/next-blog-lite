import { render, screen } from "@testing-library/react";
import SocialMediaIcons from "./socialMediaIcons";

describe('Social Media Icons', () => {
    beforeEach(() => {
        render(<SocialMediaIcons />)
    })

    it('should render facebook icon on the screen', function() {
        const facebookIcon = screen.getByAltText('facebook');

        expect(facebookIcon).toBeInTheDocument();
    });

    it('should render linkedin icon on the screen', function() {
        const linkedin = screen.getByAltText('linkedin');

        expect(linkedin).toBeInTheDocument();
    });

    it('should render instagram icon on the screen', () => {
        const instagram = screen.getByAltText('instagram');

        expect(instagram).toBeInTheDocument();
    });
});
