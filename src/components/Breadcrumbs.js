import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Breadcrumbs = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  // Check if the current path is the home page ("/")
  const isHomePage = currentPath === "/";

  // If it's the home page, don't render the breadcrumb component
  if (isHomePage) {
    return null;
  }

  const pathSegments = currentPath.split("/").filter((segment) => segment);

  return (
    <Box m="4" px="4">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathSegments.map((segment, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink
              href={"/" + pathSegments.slice(0, index + 1).join("/")}
              textDecoration={
                index === pathSegments.length - 1 ? "underline" : "none"
              }
            >
              {segment}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  );
};

export default Breadcrumbs;
