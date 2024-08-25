import type { useToast } from "@chakra-ui/toast";
import type { AlertType } from "../../@types/tipages";

export function ALERTA(
  { title, description, status }: AlertType,
  toast: ReturnType<typeof useToast>
) {
  switch (status) {
    case "success":
      toast({
        title: `${title}`,
        description: `${description}`,
        status: `${status}`,
        duration: 3000,
        isClosable: true,
      });
      break;
    case "error":
      toast({
        title: `${title}`,
        description: `${description}`,
        status: `${status}`,
        duration: 3000,
        isClosable: true,
      });
      break;
    default:
      break;
  }
}
