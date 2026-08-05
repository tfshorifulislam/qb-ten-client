import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputButtonGroup() {
    return (
        <Field>
            <ButtonGroup>
                <Input
                className="w-80"
                    id="input-button-group"
                    placeholder="Search anything..." />
                <Button variant="outline">Search</Button>
            </ButtonGroup>
        </Field>
    )
}
