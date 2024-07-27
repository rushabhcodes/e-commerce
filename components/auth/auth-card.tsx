import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Socials from "./socials";
import BackButton from "./back-button";

type CardWrapprProps = {
  children: React.ReactNode;
  cardTitle: string;
  backButtonHref: string;
  backButtonLabel: string;
  showSocials?: boolean;
};

export const AuthCard = ({
  children,
  cardTitle,
  backButtonHref,
  backButtonLabel,
  showSocials,
}: CardWrapprProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocials && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
          backButtonHref={backButtonHref}
          backButtonLabel={backButtonLabel}
        />
      </CardFooter>
    </Card>
  );
};
