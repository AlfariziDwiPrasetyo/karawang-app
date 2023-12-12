"use client";
import React from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
  ListItem,
  Collapse,
} from "@material-tailwind/react";
import { RenderItems } from "./RenderItemLayanan";
import SpinnerLoad from "./SpinnerLoad";

export default function LayananListMenu({ titleItem, content, loading }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {titleItem}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          {loading ? (
            <div className="flex justify-center items-center">
              <SpinnerLoad />
            </div>
          ) : (
            <div>
              {content?.data?.map((item, key) => (
                <RenderItems item={item} key={key} />
              ))}
            </div>
          )}
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          {loading ? (
            <div className="flex items-center">
              <SpinnerLoad />
            </div>
          ) : (
            <div>
              {content?.data?.map((item, key) => (
                <RenderItems item={item} key={key} />
              ))}
            </div>
          )}
        </Collapse>
      </div>
    </>
  );
}
