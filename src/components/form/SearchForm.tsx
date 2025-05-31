import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type FormEvent } from "react";
import { toast, useToast } from "@/hooks/use-toast";

type SerachFormProps = {
  userName?: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ userName, setUserName }: SerachFormProps) => {
  const [inputText, setInputText] = useState<string>(userName);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText) {
      toast({
        title: "Please enter a GitHub username",
      });
    }
    setUserName(inputText);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-x-4 w-full lg:w-1/2  mb-8"
    >
      <Label htmlFor="search" className="sr-only">
        GitHub Username
      </Label>
      <Input
        id="search"
        type="text"
        placeholder="Enter GitHub username"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        aria-placeholder="Enter GitHub username"
        className="flex-1 flex-grow bg-background"
      />
      <Button type="submit" className="w-32">
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
