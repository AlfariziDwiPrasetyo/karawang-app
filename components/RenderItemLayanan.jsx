"use client";
import React from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Collapse,
  Typography,
  ListItem,
} from "@material-tailwind/react";
import Link from "next/link";

export const RenderItems = React.forwardRef(({ item }, key) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return item.Layanan?.length !== 0 ? (
    <>
      <Menu
        placement="right-start"
        open={openMenu}
        handler={setOpenMenu}
        allowHover
        key={key}
        offset={15}
      >
        <MenuHandler className="flex items-center justify-between">
          <MenuItem>
            <div>
              <Typography as="div" variant="small" className="font-medium">
                <ListItem
                  className="flex items-center gap-2 py-2 pr-4 font-bold text-gray-900"
                  selected={openMenu || isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                >
                  {item.name}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`hidden h-3 w-3 transition-transform lg:block ${
                      openMenu ? "rotate-180" : ""
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
            </div>
          </MenuItem>
        </MenuHandler>
        <MenuList>
          {item.Layanan.map((layanan, key) => (
            <Link key={key} href={`/layanan/${layanan.slug}`}>
              <MenuItem key={layanan.id}>{layanan.name}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <div className="pl-3">
            {item.Layanan.map((layanan, key) => (
              <Link key={key} href={`/layanan/${layanan.slug}`}>
                <MenuItem>{layanan.name}</MenuItem>
              </Link>
            ))}
          </div>
        </Collapse>
      </div>
    </>
  ) : (
    <MenuItem>
      <div>
        <Typography as="div" variant="small" className="font-medium">
          <ListItem
            className="flex items-center gap-2 py-2 pr-4 font-bold text-gray-900"
            selected={openMenu || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            {item.name}
          </ListItem>
        </Typography>
      </div>
    </MenuItem>
  );
});
